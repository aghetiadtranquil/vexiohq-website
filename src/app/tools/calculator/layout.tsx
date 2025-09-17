import { Metadata } from 'next'
import { calculatorMetadata } from './metadata'

// Export metadata for the calculator page
export const metadata: Metadata = calculatorMetadata

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}