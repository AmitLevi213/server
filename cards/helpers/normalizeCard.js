const normalizeCard = async (rawCard) => {
    const { url, alt} = rawCard.image;
    const image = {
        url: url || "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
        alt: alt || "Business card image"
    }

    return {
        ...rawCard,
        image,
        address: {
            ...rawCard.address,
            state: rawCard.address.state || "N/A",
        },
        bizNumber: rawCard.bizNumber || 9_999_999, // switch to generateBizNumber() 7 digits
        user_id: "5f5f5f5f5f5f5f5f5f5f5f5f" 
    }
}

module.exports = normalizeCard;