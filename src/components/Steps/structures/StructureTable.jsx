function StructureTable(props) {
    const { strucutres, roles, onChange } = props;

    function onChangeStructure(index, newState) {
        onChange(index, { checked: newState });
    }

    function onChangeStructureRole(index, newRole) {
        onChange(index, { role: newRole });
    }

    return (
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 table-auto ">
            <thead class="text-xs text-gray-700 bg-gray-50 ">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                            />
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
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    checked={strucutreItem.checked}
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                                    onChange={(e) => onChangeStructure(index, e.target.checked)}
                                />
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {strucutreItem.name}
                        </th>
                        <td class="px-6 py-4">
                            <select
                                id="rols" name="rols"
                                value={strucutreItem.role}
                                onChange={(e) => onChangeStructureRole(index, e.target.value)}
                                class="text-gray-900 text-sm rounded-lg block p-2.5">
                                {roles.map((roleItem, index) => (
                                    <option value={roleItem} key={index}>{roleItem}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}

export default StructureTable;