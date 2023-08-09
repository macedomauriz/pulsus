export const getFileName = (file: string) => {
  const imagePathParts = file.split("/")
  const filenameWithExtension = imagePathParts[imagePathParts.length - 1]
  const filename = filenameWithExtension.split(".")[0]
  return filename
}
