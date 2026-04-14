const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // CSS updates
            if (fullPath.endsWith('globals.css')) {
                 content = content.replace(/background-color: #030303;/g, 'background-color: #f8fafc;');
                 content = content.replace(/color: #FAFAFA;/g, 'color: #0f172a;');
                 content = content.replace(/rgba\(255, 255, 255,/g, 'rgba(0, 0, 0,');
            }

            // Tailwind classes to light mode
            content = content.replace(/bg-\[\#030303\]/g, 'bg-slate-50');
            content = content.replace(/bg-\[\#020202\]/g, 'bg-white');
            content = content.replace(/\btext-white\b/g, 'text-slate-900');
            content = content.replace(/\btext-zinc-50\b/g, 'text-slate-800');
            content = content.replace(/\btext-zinc-400\b/g, 'text-slate-600');
            content = content.replace(/\btext-zinc-500\b/g, 'text-slate-500');
            content = content.replace(/\btext-zinc-600\b/g, 'text-slate-400');
            
            // Borders and BG opacity
            content = content.replace(/border-white/g, 'border-black');
            content = content.replace(/bg-white\/(\d|10|20|5)/g, 'bg-black/$1');
            content = content.replace(/shadow-\[0_0_15px_rgba\(255,255,255,0\.2\)\]/g, 'shadow-[0_0_15px_rgba(0,0,0,0.1)]');
            content = content.replace(/shadow-\[0_0_15px_rgba\(255,255,255,0\.1\)\]/g, 'shadow-[0_0_15px_rgba(0,0,0,0.1)]');
            
            // Buttons
            content = content.replace(/bg-white text-black/g, 'bg-slate-900 text-white');
            content = content.replace(/bg-zinc-200/g, 'bg-slate-700');

            // Text changes
            content = content.replace(/>IZRA</g, '>ROHITH<');
            content = content.replace(/"IZRA"/g, '"ROHITH"');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDir('./src');
