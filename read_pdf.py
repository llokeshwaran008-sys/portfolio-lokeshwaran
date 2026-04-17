import PyPDF2
with open("Lokesh MCA Resume.pdf", "rb") as f:
    reader = PyPDF2.PdfReader(f)
    for page_num in range(len(reader.pages)):
        print(reader.pages[page_num].extract_text())
