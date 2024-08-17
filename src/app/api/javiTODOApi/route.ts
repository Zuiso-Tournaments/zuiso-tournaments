import {deleteAllFilms, getFilms} from '@/actions/javiTODO';

// Ensure `deleteAllFilms` is correctly imported
import {NextResponse} from 'next/server';

// Handle GET requests
export async function GET() {
  try {
    const data = await getFilms();
    return NextResponse.json({data});
  } catch (error) {
    console.error('Error fetching films:', error);
    return NextResponse.json({error: 'Failed to fetch films'}, {status: 500});
  }
}

// Handle DELETE requests
export async function DELETE() {
  try {
    await deleteAllFilms(); // Function to clear all rows in the films table
    return NextResponse.json(
      {message: 'All films deleted successfully'},
      {status: 200}
    );
  } catch (error) {
    console.error('Error deleting films:', error);
    return NextResponse.json({error: 'Failed to delete films'}, {status: 500});
  }
}
