async function getGithubFolderContents() {
  const owner = '00001158542112sp-create';
  const repo = 'Micro_Bit_AI-MariaDeLourdes';
  const path = 'AIfiles'; // Use '' for the root directory
  const url = `https://github.com${owner}/${repo}/contents/${path}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch folder contents');
    
    const contents = await response.json();
    
    // contents is an array of file/folder objects
    contents.forEach(item => {
      console.log(`${item.type}: ${item.name}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

getGithubFolderContents();
