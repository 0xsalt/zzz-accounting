# Development server with Turbopack (hot reload, foreground)
# Use Ctrl+C to stop, or `make stop` from another terminal
dev:
	bun run dev

# Build static export to out/
build:
	bun run build

# Stop whatever is running on port 3000
stop:
	-lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Install dependencies
install:
	bun install

# Remove build artifacts
clean:
	rm -rf out .next node_modules
