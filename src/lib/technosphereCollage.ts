import md from '../content/technosphere-collage.md?raw';

// Import all images
import extractionImg from '../assets/extraction.jpg';
import assemblyImg from '../assets/assembly.jpg';
import computationImg from '../assets/computation.jpg';
import circulationImg from '../assets/circulation.png';
import wasteImg from '../assets/waste.jpg';

// Map image filenames to imported URLs
const imageMap: Record<string, string> = {
  'extraction.jpg': extractionImg,
  'assembly.jpg': assemblyImg,
  'computation.jpg': computationImg,
  'circulation.png': circulationImg,
  'waste.jpg': wasteImg,
};

// Debug: log image map
console.log('Image map:', imageMap);

export type Stage = {
  id: string;
  roman: string;
  title: string;
  position: 'above' | 'below';
  image: string;
  alt: string;
  caption: string;
};

/**
 * Parses the markdown content and extracts stage information
 */
export function getTechnosphereStages(): Stage[] {
  if (!md || typeof md !== 'string') {
    console.error('Markdown content is not a string:', typeof md, md);
    return [];
  }

  // Remove frontmatter (everything between --- and ---)
  const frontmatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n/;
  let content = md.replace(frontmatterRegex, '');

  // Remove the instructions comment block
  content = content.replace(/<!--\s*[\s\S]*?INSTRUCTIONS[\s\S]*?-->\s*/g, '');

  // Split by stage dividers
  const stageBlocks = content.split(/\n---\s*\n/).filter(block => block.trim());
  
  console.log('Found', stageBlocks.length, 'stage blocks');

  const stages: Stage[] = [];

  for (const block of stageBlocks) {
    // Extract STAGE comment - match with newline after STAGE
    const stageCommentMatch = block.match(/<!--\s*STAGE\s*\n([\s\S]*?)\n-->/);
    if (!stageCommentMatch) {
      console.warn('No STAGE comment found in block. First 200 chars:', block.substring(0, 200));
      continue;
    }

    const stageComment = stageCommentMatch[1].trim();
    const caption = block.replace(/<!--\s*STAGE\s*\n[\s\S]*?\n-->\s*/, '').trim();

    // Parse key-value pairs from STAGE comment
    const metadata: Record<string, string> = {};
    const lines = stageComment.split('\n');
    
    console.log('Parsing stage comment:', stageComment);
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;
      
      // More flexible regex to handle any characters in key
      const match = trimmedLine.match(/^([^:]+):\s*(.+)$/);
      if (match) {
        const key = match[1].trim();
        let value = match[2].trim();
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        metadata[key] = value;
        console.log(`  Parsed: ${key} = ${value}`);
      } else {
        console.warn(`  Failed to parse line: "${trimmedLine}"`);
      }
    }
    
    console.log('Final metadata:', metadata);

    // Resolve image path
    const imagePath = metadata.image || '';
    const imageFilename = imagePath.split('/').pop() || '';
    const imageUrl = imageMap[imageFilename] || imagePath;
    
    if (!imageMap[imageFilename]) {
      console.warn(`Image not found in map for filename: ${imageFilename}. Available keys:`, Object.keys(imageMap));
    }

    // Build stage object
    const stage: Stage = {
      id: metadata.id || '',
      roman: metadata.roman || '',
      title: metadata.title || '',
      position: (metadata.position as 'above' | 'below') || 'below',
      image: imageUrl,
      alt: metadata.alt || '',
      caption: caption.replace(/\s+/g, ' ').trim(), // Collapse whitespace
    };

    stages.push(stage);
  }

  // Debug logging
  if (stages.length === 0) {
    console.error('No stages parsed from markdown. Content length:', md.length);
    console.error('First 500 chars of markdown:', md.substring(0, 500));
  } else {
    console.log(`Parsed ${stages.length} stages:`, stages.map(s => s.title));
  }

  return stages;
}
