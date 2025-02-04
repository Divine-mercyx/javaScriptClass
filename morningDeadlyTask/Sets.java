
public class Sets {
    private ArrayList1 list = new ArrayList1();


    public boolean isEmpty() {
        return list.isEmpty();
    }

    public void add(String s) {
        if (!list.contains(s)) list.add(s);
    }

    public int size() {
        return list.size();
    }


    public boolean contains(String element) {
        return list.contains(element);
    }


    public void remove(String element) {
        if (contains(element)) list.remove(element);
    }

    public String[] toArray() {
        return list.toArray();
    }

    public void retainAll(String[] values) {
        list = new ArrayList1();
        for (String value : values) {
            list.add(value);
        }
    }

    public int indexOf(String element) {
        return list.indexOf(element);
    }

    public String get(int index) {
        return list.get(index);
    }
}
