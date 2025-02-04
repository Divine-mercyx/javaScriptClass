
def count_of_value(value, values):
    count = 0
    for item in values:
        if value == item:
            count += 1
    return count

def convert_list(values):
    my_dict = {}
    for value in values:
        my_dict[value] = count_of_value(value, values)
    return my_dict
        
    
print(convert_list([2, 2, 1, 3, 5, 5]))

