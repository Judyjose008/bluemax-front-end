document.getElementById("appoitmentForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const request = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value
    } 
    try {
        const { data } = await axios.post(`${baseURL}/appointment`, request);
        document.getElementById("appoitmentBookedAlert").style.display = 'block';
        setTimeout(()=> { document.getElementById("appoitmentBookedAlert").style.display = 'none'; }, 10000);
    } catch (error) {   
        document.getElementById("unableToBook").style.display = 'block';
        setTimeout(()=> { document.getElementById("unableToBook").style.display = 'none'; }, 10000);
        console.log(error);
    }
});