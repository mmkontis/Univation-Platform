import Link from 'next/link';
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
  Search,
  Calendar,
  Radio,
  Users,
  FileText,
  FileCheck,
  Building,
  CreditCard,
  Brain,
  Sparkles,
  ChevronRight,
  Zap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import { User } from './components/user';
import { VercelLogo } from '@/components/icons';
import Providers from './providers';
import { NavItem } from './components/nav-item';
import { SearchInput } from './components/search';
import { HomeIcon } from '@heroicons/react/20/solid';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <main className="flex min-h-screen w-full flex-col bg-muted/40">
        <DesktopNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <MobileNav />
            <DashboardBreadcrumb />
            <SearchInput />
            <User />
          </header>
          <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
            {children}
          </main>
        </div>
        <Analytics />
      </main>
    </Providers>
  );
}

function DesktopNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col gap-4 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-2 py-1"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <VercelLogo className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">Unistudents</span>
        </Link>

        <div className="mt-4">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Main</h3>
          <NavItem href="/" label="Home">
            <Home className="h-5 w-5 mr-3" />
            Home
          </NavItem>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Posting</h3>
          <NavItem href="/opportunities" label="Opportunities">
            <Search className="h-5 w-5 mr-3" />
            Opportunities
          </NavItem>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Relationships</h3>
          <NavItem href="/fairs" label="Fairs">
            <Calendar className="h-5 w-5 mr-3" />
            Fairs
          </NavItem>
          <NavItem href="/talent-radar" label="Talent Radar">
            <Radio className="h-5 w-5 mr-3" />
            Talent Radar
          </NavItem>
          <NavItem href="#" label="Available Talent">
            <Users className="h-5 w-5 mr-3" />
            Available Talent
            <Badge variant="success" className="ml-auto">Soon</Badge>
          </NavItem>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Management</h3>
          <NavItem href="#" label="Lists">
            <FileText className="h-5 w-5 mr-3" />
            Lists
            <Badge variant="secondary" className="ml-auto">Upgrade</Badge>
          </NavItem>
          <NavItem href="#" label="Applications">
            <FileCheck className="h-5 w-5 mr-3" />
            Applications
            <Badge variant="secondary" className="ml-auto">Upgrade</Badge>
          </NavItem>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Superpowers</h3>
          <NavItem href="/ai-recruiter" label="AI Recruiter">
            <Sparkles className="h-5 w-5 mr-3" />
            AI Recruiter
            <Badge variant="default" className="ml-auto">New</Badge>
          </NavItem>
        </div>
      </nav>
      
      <div className="mt-auto p-4">
        <div className="mb-4">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Administration</h3>
          <NavItem href="/organization" label="Organization">
            <Building className="h-5 w-5 mr-3" />
            Organization
          </NavItem>
          <NavItem href="/billing" label="Billing">
            <CreditCard className="h-5 w-5 mr-3" />
            Billing
          </NavItem>
        </div>

        <Link href="/plans" className="block">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-sm">Current Plan</span>
              <Badge variant="outline" className="bg-white/20 text-white border-white/40">Free</Badge>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold">€0</span>
              <span className="text-xs opacity-75">/month</span>
            </div>
            <div className="flex items-center text-sm mb-4">
              <Zap className="h-4 w-4 mr-2" />
              <span>0 Talent unlocks</span>
            </div>
            <Button variant="secondary" className="w-full bg-white text-purple-700 hover:bg-purple-100">
              <span>Upgrade Plan</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </Link>
      </div>
    </aside>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Vercel</span>
          </Link>

          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Main</h3>
            <Link href="/" className="flex items-center gap-4 px-2.5 text-foreground">
              <Home className="h-5 w-5" />
              Home
            </Link>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Posting</h3>
            <Link href="/opportunities" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
              Opportunities
            </Link>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Relationships</h3>
            <Link href="/fairs" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Calendar className="h-5 w-5" />
              Fairs
            </Link>
            <Link href="/talent-radar" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Radio className="h-5 w-5" />
              Talent Radar
            </Link>
            <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Users className="h-5 w-5" />
              Available Talent
              <Badge variant="success" className="ml-auto">Soon</Badge>
            </Link>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Management</h3>
            <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <FileText className="h-5 w-5" />
              Lists
              <Badge variant="secondary" className="ml-auto">Upgrade</Badge>
            </Link>
            <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <FileCheck className="h-5 w-5" />
              Applications
              <Badge variant="secondary" className="ml-auto">Upgrade</Badge>
            </Link>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Superpowers</h3>
            <Link href="/ai-recruiter" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Sparkles className="h-5 w-5" />
              AI Recruiter
              <Badge variant="default" className="ml-2 text-xs">New</Badge>
            </Link>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">Administration</h3>
            <Link href="/organization" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Building className="h-5 w-5" />
              Organization
            </Link>
            <Link href="/billing" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <CreditCard className="h-5 w-5" />
              Billing
            </Link>
          </div>

          <Link href="/plans" className="block">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">Current Plan</span>
                <Badge variant="outline" className="bg-white/20 text-white border-white/40">Free</Badge>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold">€0</span>
                <span className="text-xs opacity-75">/month</span>
              </div>
              <div className="flex items-center text-sm mb-4">
                <Zap className="h-4 w-4 mr-2" />
                <span>0 Talent unlocks</span>
              </div>
              <Button variant="secondary" className="w-full bg-white text-purple-700 hover:bg-purple-100">
                <span>Upgrade Plan</span>
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function DashboardBreadcrumb() {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <HomeIcon className="h-4 w-4 mr-2" />
              
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Organization</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
