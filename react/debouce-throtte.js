const DeboundedComponent = () => {
  const [query, setQuery] = useState("")

  const debouncedSave = useCallback(
    _.debounce(nextValue => saveToLocalStorage(nextValue), 1000)
    ,[]
  )

  const handleChange = () => {
    const { value } = e.target;
    setQuery(value);
    debouncedSave(value)
  }

  const saveToLocalStorage = (value) => {
    localStorage.set("query", value)
  }

  return (
    <input type="text" value={query} onChange={handleChange} />
  )
}

// example 2:
const ThrottedComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const throttedHandleScroll = useCallback(
    _.throttle(() => {
      setScrollPosition(window.scrollY)
    }, 1000),
    []
  )

  useEffect(() => {
    window.addEventListener("scroll", throttedHandleScroll)

    return () => {
      window.removeEventListener("scroll", throttedHandleScroll)
    }
  }, [throttedHandleScroll])


  return (
    <div style={{ height: "200vh"}}>
      some content here
    </div>
  )
}


//debound in js

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// usage:
const debouncedHandleInput = debounce(handleInput, 500)