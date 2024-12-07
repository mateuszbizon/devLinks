export async function getFileFromUrl(blobUrl: string): Promise<File> {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
  
    const file = new File([blob], "", { type: blob.type });
  
    return file;
}