import { render } from "@testing-library/react"
import React from "react"
import App from "../pages/index"

test("<App /> renders without error", () => {
  const { container } = render(<App />)

  expect(container).toBeDefined()
})

test("<App /> renders a navigation element", async () => {
  const { findByRole } = render(<App />)

  const nav = await findByRole("navigation")

  expect(nav).toBeDefined()
})

test("<App /> renders an h1", async () => {
  const { findAllByRole } = render(<App />)

  const h1 = await findAllByRole("heading", { level: 1 })

  expect(h1).toBeDefined()
})

test("<App /> renders a main element", async () => {
  const { findAllByRole } = render(<App />)

  const main = await findAllByRole("main")

  expect(main).toBeDefined()
})
