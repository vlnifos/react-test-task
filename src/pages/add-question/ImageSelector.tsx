type Props = {
  onImageSelect: (img: string) => void
}

export const ImageSelector = (props: Props) => {
  const handleImageSelect = (el: any) => {
    el.preventDefault()
    const { files } = el.target
    const localImageUrl = window.URL.createObjectURL(files[0])
    props.onImageSelect(localImageUrl)
  }

  return (
    <input
      type="file"
      accept="image/gif, image/jpeg, image/png"
      onChange={handleImageSelect}
      alt="answer"
    />
  )
}
