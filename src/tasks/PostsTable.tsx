// 1. Pobierz dane z API (GET) pod adresem:
//  https://jsonplaceholder.typicode.com/posts
// 2. Wyświetl dane w tabeli (PostsView) w komponencie PostsView

// TRUDNIEJSZA CZĘŚĆ
// 1. Dodaj input gdzie bedzie mozna wpisac
// id posta do pobrania i kliknac przycisk "Pobierz"

const PostsView = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Post id
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Body
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            1
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Lorem
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            quaerat eveniet tempora quas. Rem doloremque pariatur omnis.
            Doloremque voluptatem cupiditate, delectus exercitationem veniam
            molestias facere, a nostrum adipisci minus assumenda.
          </td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            2
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Lorem, ipsum.
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            quaerat eveniet tempora quas. Rem doloremque pariatur omnis.
            Doloremque voluptatem cupiditate, delectus exercitationem veniam
            molestias facere, a nostrum adipisci minus assumenda.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PostsView;
