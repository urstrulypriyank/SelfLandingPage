import path from 'path';
import fs from 'fs/promises';

export async function GET() {
    const filePath = path.join(process.cwd(), 'src/assets/Resume', 'myResume.pdf');

    try {
        const fileBuffer = await fs.readFile(filePath);
        return new Response(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'inline; filename="resume.pdf"',
            },
        });
    } catch (error) {
        console.error('Error reading PDF file:', error);
        return new Response('PDF not found', { status: 404 });
    }
}
