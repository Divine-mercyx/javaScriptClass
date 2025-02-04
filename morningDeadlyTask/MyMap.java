
public class MyMap {
    private int size;
    private Sets keySet = new Sets();
    private ArrayList1 valueSet = new ArrayList1();

    public boolean isEmpty() {
        return true;
    }

    public void put(String key, String value) {
        keySet.add(key);
        valueSet.add(value);
        size++;
    }

    public int size() {
        return size;
    }

    public String get(String key) {
        if (keySet.contains(key)) {
            int index = keySet.indexOf(key);
            return valueSet.get(index);
        }
        throw new IllegalArgumentException("Key not found");
    }

    public void remove(String key) {
        if (keySet.contains(key)) {
            int index = findIndex(key);
            keySet.remove(key);
            String valueToRemove = valueSet.get(index);
            valueSet.remove(valueToRemove);
            size--;
        }
    }

    private int findIndex(String value) {
        for (int i = 0; i < keySet.size(); i++) {
            if (value.equals(keySet.get(i))) {
                return i;
            }
        }
        return -1;
    }

    public boolean containsKey(String key) {
        for (int i = 0; i < keySet.size(); i++) {
            if (key.equals(keySet.get(i))) {
                return true;
            }
        }
        return false;
    }

    public boolean containsValue(String value) {
        for (int i = 0; i < valueSet.size(); i++) {
            if (value.equals(valueSet.get(i))) {
                return true;
            }
        }
        return false;
    }
    
    @Override
    public String toString() {
      String values = "";
      for (int i = 0; i < size; i++) {
        values += keySets.get(i) + " : ";
        values += valueSet.get(i) + ",";
      }
      return values;
    }
}
