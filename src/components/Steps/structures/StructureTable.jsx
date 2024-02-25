function StructureTable(props) {
    const { strucutres, roles } = props;

    return (
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 bg-gray-50 ">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                            <label for="checkbox-all-search" class="sr-only">Structure</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Structures
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Role
                    </th>
                </tr>
            </thead>
            <tbody >
                {strucutres.map((strucutreItem, index) => (
                    <tr key={index} class="bg-white border-b ">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {strucutreItem}
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default StructureTable;