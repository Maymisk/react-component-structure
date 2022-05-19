interface IProps {
    selectedGenre: {
        title: string;
    };
}

export function Header({ selectedGenre }: IProps) {
    return (
        <header>
            <span className="category">
                Categoria:<span> {selectedGenre.title}</span>
            </span>
        </header>
    );
}
