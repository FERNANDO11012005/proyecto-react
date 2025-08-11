export default function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Correo" />
      <textarea placeholder="Mensaje"></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}