const { test, expect } = require('@playwright/test');

const externalRequests = new WeakMap();
const siteOrigin = new URL(process.env.BASE_URL || 'http://127.0.0.1:4173/').origin;

test.beforeEach(async ({ page }) => {
  const requests = [];
  externalRequests.set(page, requests);
  page.on('request', (request) => {
    const url = new URL(request.url());
    if (url.origin !== siteOrigin || request.method() !== 'GET') requests.push(`${request.method()} ${url.href}`);
  });
});

test.afterEach(async ({ page }) => {
  expect(externalRequests.get(page), 'tool pages should not send inputs to external services').toEqual([]);
});

test('landing page links to all tools and fits a mobile viewport', async ({ page }) => {
  await page.goto('');
  for (const tool of ['CipherVault', 'CSPForge', 'EncodeKit', 'HashLab', 'HeaderGuard', 'JWTInspect', 'PassForge', 'PhishCheck', 'PhishIQ', 'SecretSweeper']) {
    await expect(page.getByRole('link', { name: tool, exact: true })).toHaveAttribute('href', new RegExp(`tools/${tool}/`));
  }
  await page.setViewportSize({ width: 375, height: 812 });
  const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasHorizontalOverflow).toBe(false);
});

test('CipherVault encrypts text in the browser', async ({ page }) => {
  await page.goto('tools/CipherVault/');
  await page.locator('#plain').fill('toolkit smoke test');
  await page.locator('#pass').fill('correct horse battery staple');
  await page.locator('#go').click();
  await expect(page.locator('#result .note.n-ok')).toContainText('Encrypted');
  await expect(page.locator('#meta')).toContainText('AES-256-GCM');
});

test('CSPForge reports unsafe inline script policy', async ({ page }) => {
  await page.goto('tools/CSPForge/');
  await page.getByRole('button', { name: 'Load sample' }).click();
  await expect(page.locator('#out')).toContainText('unsafe-inline');
});

test('EncodeKit converts text to Base64', async ({ page }) => {
  await page.goto('tools/EncodeKit/');
  await page.locator('#in').fill('security toolkit');
  await expect(page.locator('#out')).toHaveValue('c2VjdXJpdHkgdG9vbGtpdA==');
});

test('HashLab computes the SHA-256 digest for text', async ({ page }) => {
  await page.goto('tools/HashLab/');
  await page.locator('#text').fill('hello');
  await expect(page.locator('#hashes')).toContainText('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
});

test('HeaderGuard grades the loaded response-header sample', async ({ page }) => {
  await page.goto('tools/HeaderGuard/');
  await page.getByRole('button', { name: 'Load sample' }).click();
  await expect(page.locator('#out')).toContainText('Strict-Transport-Security');
});

test('JWTInspect decodes the sample token claims', async ({ page }) => {
  await page.goto('tools/JWTInspect/');
  await page.getByRole('button', { name: 'Load sample token' }).click();
  await expect(page.locator('#out')).toContainText('1234567890');
  await expect(page.locator('#out')).toContainText('admin');
});

test('PassForge generates a password', async ({ page }) => {
  await page.goto('tools/PassForge/');
  await page.locator('button[onclick="gen(\'pw\')"]').click();
  const value = (await page.locator('#out').textContent()).trim();
  expect(value.length).toBeGreaterThanOrEqual(12);
});

test('PhishCheck flags a URL with an IP host and user-info', async ({ page }) => {
  await page.goto('tools/PhishCheck/');
  await page.locator('#url').fill('http://paypal.com@192.168.1.10/login');
  await page.getByRole('button', { name: 'Analyze' }).click();
  await expect(page.locator('#out')).toContainText('IP address used as the hostname');
  await expect(page.locator('#out')).toContainText('user-info');
});

test('PhishIQ accepts an answer and updates feedback', async ({ page }) => {
  await page.goto('tools/PhishIQ/');
  await page.locator('#game button.phish').click();
  await expect(page.locator('#fb')).toContainText('Correct');
  await expect(page.locator('#scoreLbl')).toContainText('Score 1');
});

test('SecretSweeper scans its synthetic sample', async ({ page }) => {
  await page.goto('tools/SecretSweeper/');
  await page.getByRole('button', { name: 'Load sample' }).click();
  await expect(page.locator('#counts')).toContainText('Email');
  await expect(page.locator('#summary')).not.toBeEmpty();
});
