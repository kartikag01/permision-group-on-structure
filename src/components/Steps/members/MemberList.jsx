function MemberList(props) {
    const { members, onChange } = props;

    function handleOnChangeMember(index, newState) {
        onChange(index, { checked: newState });
    }

    return (
        <div>
            {members.map((member, index) => (
                <div key={member.email} className="flex flex-row justify-between border-b border-b-gray-200 py-4">
                    <div>
                        <span>{member.user}</span>
                        <div>
                            <span className="text-gray-500">{member.email}</span>
                            <span className="px-2">&#x2022;</span>
                            <span className="text-gray-500">{member.organisation}</span>
                        </div>
                    </div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input
                            checked={member.checked}
                            onChange={(e) => handleOnChangeMember(index, e.target.checked)}
                            type="checkbox"
                            class="sr-only peer" />
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            ))}
        </div>
    );
}

export default MemberList;