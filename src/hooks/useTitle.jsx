const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Hand-Change`
    },[title])
}

export default useTitle;