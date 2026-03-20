import emailjs from "@emailjs/browser";

export const sendOrderEmail = (
    cart,
    subtotal,
    discount,
    gst,
    total,
    email
) => {

    const orders = cart.map((item) => ({
        image_url: item.image,
        name: item.name,
        quantity: item.quantity,
        price: item.price * item.quantity
    }));

    const templateParams = {
        order_id: Math.floor(Math.random() * 100000),
        email: email,
        orders: orders,
        subtotal: subtotal,
        discount: discount,
        gst: gst,
        total: total
    };

    emailjs.send(
        "service_tql4szk",
        "template_7kro50n",
        templateParams,
        "HTRp0_zvu3GgyQbVz"
    )
        .then((res) => {
            console.log("Email sent", res);
        })
        .catch((err) => {
            console.log("Email error", err);
        });

};
