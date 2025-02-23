#!/bin/bash
# Cleanup script

echo "Cleaning up unused files..."

# Remove .test.js files
find . -name "*.test.js" -type f -delete

# Remove .log files
find . -name "*.log" -type f -delete

# Any other cleanup commands can be added here

echo "Cleanup complete!"
