"""Extract document order: for each paragraph, output text or image reference."""
import zipfile
import re
from xml.etree import ElementTree as ET

NS = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture',
}

def extract(docx_path, out_path):
    with zipfile.ZipFile(docx_path) as z:
        doc_xml = z.read('word/document.xml').decode('utf-8')
        rels_xml = z.read('word/_rels/document.xml.rels').decode('utf-8')
    
    # Build rels map: rId -> target filename
    rels = {}
    rels_root = ET.fromstring(rels_xml)
    for r in rels_root:
        rels[r.attrib['Id']] = r.attrib['Target']
    
    root = ET.fromstring(doc_xml)
    body = root.find('w:body', NS)
    
    lines = []
    for para in body.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        # Check for text
        texts = para.findall('.//w:t', NS)
        text = ''.join(t.text or '' for t in texts).strip()
        # Check for images (blip references)
        blips = para.findall('.//a:blip', NS)
        for b in blips:
            embed = b.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            if embed and embed in rels:
                lines.append(f"[IMAGE] {rels[embed]}")
        if text:
            lines.append(text)
    
    with open(out_path, 'w') as f:
        f.write('\n'.join(lines))
    print(f"Wrote {len(lines)} lines to {out_path}")

extract('/app/docx_extract/website.docx', '/app/docx_extract/website_order.txt')
extract('/app/docx_extract/changes.docx', '/app/docx_extract/changes_order.txt')
