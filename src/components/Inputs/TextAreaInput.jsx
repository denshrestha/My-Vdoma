const TextAreaInput = ({placeholder}) => {
    return (
        <textarea 
        placeholder={placeholder}
        type="text" 
        rows={5}
        className="border border-[#CFCFCF] w-full py-3.5 px-4 rounded-lg outline-[#D30724] focus:shadow-input" 
        />
    )
}

export default TextAreaInput