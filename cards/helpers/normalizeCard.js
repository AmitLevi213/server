const normalizeCard = async (rawCard) => {
  const { url, alt } = rawCard.image;
  const image = {
    url: url || "",
    alt: alt || "",
  };

  return {
    ...rawCard,
    image,
    address: {
      ...rawCard.address,
      state: rawCard.address.state || "N/A",
    },
    bizNumber: rawCard.bizNumber || 9_999_99,
    user_id: "",
  };
};

module.exports = normalizeCard;
