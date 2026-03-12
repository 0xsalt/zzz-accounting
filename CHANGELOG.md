# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0-alpha] - 2026-03-11

### Added
- 4-page static brochure site (Home, Services, About, Contact)
- Dark corporate theme with gold accent palette
- Service cards with lucide icons on Services page
- Contact form with Formspree email delivery
- Easter eggs (Solomon Grundy footer, "file note" quotes)
- GitHub Pages deployment via Actions workflow
- Conditional basePath for GH Pages vs local dev
- Live site link in README

### Fixed
- Hydration mismatch from dynamic `Date()` in footer copyright
- Hydration mismatch from Dark Reader browser extension (mount guards on lucide icons, suppressHydrationWarning on html element)

### Security
- Sanitized repo for public deployment (removed Tailscale hostnames, internal paths, PAI references)
- Moved Formspree form ID to `NEXT_PUBLIC_FORMSPREE_ID` environment variable
- Added `.gitignore` entries for MEMORY/, service-dashboard.yaml, .specify/

### Changed
- Removed explicit movie references from README, VISION, BACKLOG
