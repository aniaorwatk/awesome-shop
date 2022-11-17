import useCart from "../../hooks/useCart"

const ShipmentData = () => {

    const cart = useCart()
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        return cart.setShipmentData(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Firstname:
                    <input type="text" placeholder="name" name="firstName" />
                </label>
                <label>
                    Email:
                    <input type="text" placeholder="email" name="email" />
                </label>
                <lable>
                    adress:
                    <input type="text" placeholder="adress" name="adress" />
                </lable>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default ShipmentData