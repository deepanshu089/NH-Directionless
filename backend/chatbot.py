import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

os.environ["LANGSMITH_API_KEY"] = os.getenv("LANGCHAIN_API_KEY")
os.environ["LANGSMITH_TRACING"] = "true"

def get_response(question):
    # Ensure GEMINI_API_KEY is set
    api_key = os.getenv("GEMINI_API_KEY")
    if api_key is None:
        raise EnvironmentError("GEMINI_API_KEY is not set in the environment.")
    os.environ["GOOGLE_API_KEY"] = api_key

    # Define the prompt
    prompt = ChatPromptTemplate.from_template(
        """
        Answer every question asked in detail. 
        Question: {question}
        Output:
        """
    )

    # Initialize the model
    llm = ChatGoogleGenerativeAI(
        model="gemini-1.5-flash",
        temperature=0,
        max_tokens=512,
        timeout=None,
        max_retries=2,
        top_k=40,
        top_p=0.95
    )

    # Run the question through the prompt and model chain
    chain = prompt | llm
    output = chain.invoke(
        {
            "question": question,
        }
    )

    return output.content


if _name_ == "_main_":
    response = get_response("Hello")
    print(response)