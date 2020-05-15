export function CSP() {
  return (
    <meta
      httpEquiv="Content-Security-Policy"
      content={`default-src 'none'; script-src 'self' 'unsafe-inline'${
        process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""
      }; connect-src 'self'; img-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; manifest-src 'self';`}
    />
  )
}
