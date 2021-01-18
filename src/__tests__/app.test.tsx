import { render } from "@testing-library/react"
import React from "react"
import App from "../pages/index"

test("<App /> renders without error", () => {
  const { container } = render(<App />)

  expect(container).toBeInTheDocument()
})

test("<App /> renders a navigation element", async () => {
  const { findByRole } = render(<App />)

  const nav = await findByRole("navigation")

  expect(nav).toBeInTheDocument()
})

test("<App /> renders an h1", async () => {
  const { findAllByRole } = render(<App />)

  const h1 = await findAllByRole("heading", { level: 1 })

  h1.forEach((element) => {
    expect(element).toBeInTheDocument()
  })

  expect(h1.length).toEqual(1)
})

test("<App /> renders a main element", async () => {
  const { findAllByRole } = render(<App />)

  const main = await findAllByRole("main")

  main.forEach((element) => {
    expect(element).toBeInTheDocument()
  })

  expect(main.length).toEqual(1)
})
