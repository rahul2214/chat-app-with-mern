import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations(); // Fix typo here
    console.log("Conversations:", conversations);

    return (
        <div className="py-2 flex flex-col overflow-auto">
            {loading ? (
                <span className="loading loading-spinner mx-auto"></span>
            ) : (
                conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id} // Ensure _id is unique
                        conversation={conversation}
                        lastIdx={idx === conversations.length - 1} // Fix this line
                    />
                ))
            )}
        </div>
    );
};

export default Conversations;
