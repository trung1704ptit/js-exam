const { useTransition } = require("react");

const [isPending, startTransition] = useTransition();

function handleInput(e) {
    const value = e.target.value;
    startTransition(() => {
        setFilteredItems(filterItem(value)) // update nang
    })
}