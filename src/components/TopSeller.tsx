import { useEffect, useState } from 'react'

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSeller = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();

        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium, 
        }));

        setAuthors(authorsData);
      } catch (error) {
        console.error(`Error fetching authors: ${error}`);
      }
    };

    fetchData();
  }, []);

  // Follow toggle
  const toggleFollow = (index: number) => {
    setAuthors((prev) =>
      prev.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h2 className="text-xl mb-5 font-bold">Top Sellers</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex items-center gap-3">
              <img
                src={author.image}
                alt={author.name}
                className="w-12 h-12 rounded-full"
              />
              <span className="text-2xl font-medium">{author.name}</span>
            </section>
            <button
              onClick={() => toggleFollow(index)}
              className={`px-4 py-1 rounded-full text-sm ${
                author.isFollowing
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-600 text-white'
              }`}
            >
              {author.isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSeller
