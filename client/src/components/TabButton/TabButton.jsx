export default function TabButton({ children, item, link, ...props }) {
    return (
        <li className="li-item nav-item" key={item} {...props}>
            <a className="li-link nav-link" aria-current="page" href={link}>{item}</a>
        </li>
    )
}