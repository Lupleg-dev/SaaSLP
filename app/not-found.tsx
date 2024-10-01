import Link from 'next/link'
import { Home, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-purple-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Page not found</h2>
          <p className="mt-2 text-sm text-gray-600">Oops! The page you&aposre looking for doesn&apost exist.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-md text-gray-700">
            It seems you&aposve ventured into uncharted territory. Don&apost worry, even the best explorers get lost sometimes!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/search">
                <Search className="mr-2 h-4 w-4" />
                Search Templates
              </Link>
            </Button>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            If you believe this is a mistake, please{' '}
            <Link href="/contact" className="font-medium text-purple-600 hover:text-purple-500">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}