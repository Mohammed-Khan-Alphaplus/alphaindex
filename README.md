# AlphaIndex 🔧

Your one-stop shop for all internal tools, TestWare, and proprietary software built by our amazing Dev and QA teams.

## Features

✨ **Browse Tools** - Easy-to-navigate catalog of all internal tools
🔍 **Smart Search** - Real-time search across tool names, descriptions, and tags
🏷️ **Category Filtering** - Filter by Testing, Development, DevOps, and more
📥 **One-Click Downloads** - Direct download links for all tools
📱 **Responsive Design** - Works on desktop, tablet, and mobile
🎨 **Modern UI** - Beautiful interface with Violet Bloom theme

## Project Structure
```
alphaindex/
├── app/
│   ├── page.tsx              # Homepage with search and categories
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles (Violet Bloom theme)
│   └── tools/
│       └── [id]/
│           ├── page.tsx      # Individual tool detail page
│           └── not-found.tsx # 404 page
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── navigation-header.tsx # Site header
│   └── footer.tsx            # Site footer
├── data/
│   └── tools.json            # Tools database
├── public/
│   └── downloads/            # Tool executables (.exe files)
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions deployment
```

## Adding New Tools

1. **Add tool metadata** to `data/tools.json`:
```json
{
  "id": "my-new-tool",
  "name": "My New Tool",
  "description": "Brief description",
  "category": "Testing",
  "version": "1.0.0",
  "lastUpdated": "2024-11-23",
  "downloadUrl": "/downloads/my-new-tool.exe",
  "fileSize": "2.5 MB",
  "tags": ["tag1", "tag2"],
  "maintainer": {
    "name": "Your Team",
    "contact": "team@company.com"
  },
  "prerequisites": [
    "Windows 10 or higher"
  ],
  "featured": true
}
```

2. **Add the executable** to `public/downloads/my-new-tool.exe`

3. The tool will automatically appear on the site!

## Local Development

### Prerequisites
- Node.js 18+ 
- npm 9+

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/alphaindex.git
cd alphaindex
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Building for Production
```bash
npm run build
```

This generates a static site in the `out/` folder.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Enable GitHub Pages in your repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. Your site will be live at: `https://your-org.github.io/alphaindex`

### Configuration

Update the `basePath` in `next.config.js` to match your repository name:
```js
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** shadcn/ui
- **Styling:** Tailwind CSS
- **Theme:** Violet Bloom
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## Customization

### Changing Colors

Edit `app/globals.css` to customize the color scheme. The current theme uses violet/purple tones.

### Adding Categories

Categories are automatically detected from the tools in `data/tools.json`. Just add a new category to any tool!

### Modifying Layout

- Homepage: `app/page.tsx`
- Tool details: `app/tools/[id]/page.tsx`
- Header: `components/navigation-header.tsx`
- Footer: `components/footer.tsx`

## Support

For questions or issues:
- Email: mohammed.khan@alphaplus.co.uk

## License

Internal use only. All tools are property of AlphaPlus.

---

```

**Save the file.**

---

## Step 48: Create .gitignore (if not exists)

Make sure you have a proper .gitignore file.

**Check if `.gitignore` exists. If it does, verify it contains:**
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts