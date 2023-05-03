const TextInput = ({placeholder}) => {
    return (
        <input 
        placeholder={placeholder}
        type="text" 
        className="border border-[#CFCFCF] w-full py-3.5 px-4 rounded-lg outline-[#D30724] focus:shadow-input" 
        />
    )
}

export default TextInput