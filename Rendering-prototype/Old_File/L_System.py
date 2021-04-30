axiom = "ABBA"

rule = {
    'A': "AB",
    'B': "A"
}

''.join(rule.get(c,c) for c in axiom)

def single_transform(axiom, rule):
    return ''.join(rule.get(c,c) for c in axiom)

var = single_transform(axiom, rule)
print(var)

def multiple_transform(sequence, rule, iterations):
    lengths = []
    for i in range(iterations):
        sequence = single_transform(sequence, rule)
        lengths.append(len(sequence))


    return sequence, lengths

single = multiple_transform("A", rule, 10)
print(single)
