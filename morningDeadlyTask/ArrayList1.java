
import java.util.Objects;

public class ArrayList1 {
    private String[] elements = new String[4];
    private int size;

    public void add(String element) {
        elements[size++] = element;
        if (isFull()) extendArray();
    }

    private void extendArray() {
        String[] newElements = new String[elements.length * 2];
        System.arraycopy(elements, 0, newElements, 0, elements.length);
        elements = newElements;
    }

    private boolean isFull() {
        return size == elements.length;
    }

    public String get(int i) {
        return elements[i];
    }

    public int size() {
        return size;
    }

    public void remove(String element) {
        int elementIndex = findElementIndex(element);
        elements[elementIndex] = null;
        for (int i = elementIndex; i < size; i++) {
            elements[i] = elements[i + 1];
        }
    }

    private void addOldElementToNewArray(int elementIndex) {
        String[] newElements = new String[elements.length];
        for (String element : elements) {
            if (element != null) {
                newElements[elementIndex] = element;
            }
        }
        elements = newElements;
    }

    private int findElementIndex(String element) {
        for (int i = 0; i < elements.length; i++) if (elements[i].equals(element)) return i;
        return -1;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean contains(String element) {
        for (String s : elements) if (Objects.equals(s, element)) return true;
        return false;
    }

    public void clear() {
        size = 0;
        elements = new String[3];
    }

    public int indexOf(String element) {
        return findElementIndex(element);
    }

    public void add(int index, String element) {
        String[] newElements = new String[elements.length];
        for (int i = 0; i < index; i++) {
            newElements[i] = elements[i];
        }
        newElements[index] = element;

        for (int i = index; i < size; i++) {
            newElements[i + 1] = elements[i];
        }
        elements = newElements;
        size++;
    }

    public String[] toArray() {
        return elements;
    }
}
