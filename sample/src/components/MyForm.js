function MyForm() {
    return (
        <form>
            <label> enter your name : </label>
            <input type="text"></input><br></br>
            <label> enter your mobil number : </label>
            <input type="number"></input><br></br>
            <label> enter your id : </label>
            <input type="number"></input><br></br>
            <label> enter your email : </label>
            <input type="email"></input><br></br>
        </form>
    );

}
// createRoot(document.getElementById("root")).render(<MyForm />);

export default MyForm;
