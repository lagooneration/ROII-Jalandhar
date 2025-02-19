'use client'

import Link from 'next/link'
import React from 'react'
import { Logo } from './Logo'
import { NAVIGATION } from '@/constants/navigation'
import { ButtonLink } from './ButtonLink'
import { LoginButton } from '../auth/login-button'
import { useScrollDirection } from '@/lib/useScrollDirection'
import { cn } from '@/lib/utils'

export function Header() {
  const scrollDirection = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className={cn(
      "header fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100/50 px-4 py-3 transition-all duration-300",
      scrollDirection === 'down' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    )}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Logo className="h-8 md:h-10 text-brand-purple"/>
        </Link>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-brand-purple"
        >
          <span className="sr-only">Open menu</span>
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <li key={item.text}>
                <Link 
                  href={item.url} 
                  className="text-base font-medium hover:text-brand-purple transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <nav className="px-4 py-2">
              <ul className="space-y-4">
                {NAVIGATION.map((item) => (
                  <li key={item.text}>
                    <Link 
                      href={item.url} 
                      className="block py-2 text-base font-medium hover:text-brand-purple transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 border-t border-gray-100">
                  <LoginButton asChild>
                    <ButtonLink 
                      href="/auth/login" 
                      theme="purple" 
                      size="md" 
                      icon="arrow" 
                      className="w-full justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </ButtonLink>
                  </LoginButton>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="flex-shrink-0">
          <LoginButton asChild>
            <ButtonLink href="/auth/login" theme="purple" size="md" icon="arrow" className="hidden md:inline-flex">
              Sign In
            </ButtonLink>
          </LoginButton>
        </div>
      </div>
    </header>
  )
}