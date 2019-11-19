function generateCard(name, description, imageUrl, price) {
    return `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225"
                src="${imageUrl}" alt="candle">

            <div class="card-body">
                <strong class="card-text">${name}</strong>
                <p class="card-text">${description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Buy Now</button>
                    </div>
                    <small class="text-muted">RM${price}</small>
                </div>
            </div>
        </div>
    </div>
    `
}

const productContainer = document.getElementById('product-container')

productContainer.innerHTML = "Loading..."


fetch(`https://api.airtable.com/v0/appfWQTunzGJZoria/Product`, {
    headers: {
        Authorization: 'Bearer keyOCMiwxvOl0sT2s'
    }
})
    .then(function (response) {
        return response.json()
    })
    .then(function (result) {
        console.log(result.records)
        let htmlContent = ''
        result.records.forEach(function (record) {
            let imageURL
            if (record.fields.Image) {
                imageURL = record.fields.Image[0].url
            } else {
                imageURL = 'https://picsum.photos/200'
            }
            htmlContent += generateCard(record.fields.Product, record.fields.Description, imageURL, record.fields.Price)
        })

        productContainer.innerHTML = htmlContent
    })