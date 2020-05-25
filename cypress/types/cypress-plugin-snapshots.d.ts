export {}

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      toMatchImageSnapshot(ots?: Record<string, unknown>): unknown
    }
  }
}
