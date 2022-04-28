

exports.getCustomerMessage = (req, res) => {
    return res.status(200).json("Hello World Customer");
}

exports.getAdminMessage  = (req, res) => {
    return res.status(200).json("Hello World Admin");
}