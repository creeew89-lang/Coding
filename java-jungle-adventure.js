// Java Jungle Adventure - Interactive JavaScript
// Complete functionality for all 12 sections

class JungleAdventure {
    constructor() {
        this.currentSection = 'welcome';
        this.explorerName = '';
        this.explorerProgress = {
            classes: false,
            objects: false,
            methods: false,
            variables: false,
            control: false,
            inheritance: false,
            encapsulation: false,
            polymorphism: false,
            exceptions: false,
            collections: false,
            quest: false
        };
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupProgressTracker();
        this.setupInteractiveElements();
        this.setupAnimations();
        this.loadProgress();
    }

    setupNavigation() {
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.updateCurrentSection(anchor.getAttribute('href').substring(1));
                }
            });
        });
    }

    setupProgressTracker() {
        const progressItems = document.querySelectorAll('.progress-item');
        progressItems.forEach(item => {
            item.addEventListener('click', () => {
                const section = item.getAttribute('data-section');
                const target = document.getElementById(section);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.updateCurrentSection(section);
                }
            });
        });

        // Scroll-based progress tracking
        window.addEventListener('scroll', () => {
            this.updateProgressOnScroll();
        });
    }

    updateProgressOnScroll() {
        const sections = document.querySelectorAll('.section');
        const progressItems = document.querySelectorAll('.progress-item');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection && currentSection !== this.currentSection) {
            this.updateCurrentSection(currentSection);
        }
    }

    updateCurrentSection(sectionId) {
        this.currentSection = sectionId;
        
        // Update progress tracker
        document.querySelectorAll('.progress-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });

        // Mark section as visited
        if (this.explorerProgress.hasOwnProperty(sectionId)) {
            this.explorerProgress[sectionId] = true;
            this.saveProgress();
        }
    }

    setupInteractiveElements() {
        // Section 1: Welcome
        this.setupWelcomeSection();
        
        // Section 2: Classes
        this.setupClassesSection();
        
        // Section 3: Objects
        this.setupObjectsSection();
        
        // Section 4: Methods
        this.setupMethodsSection();
        
        // Section 5: Variables
        this.setupVariablesSection();
        
        // Section 6: Control Flow
        this.setupControlFlowSection();
        
        // Section 7: Inheritance
        this.setupInheritanceSection();
        
        // Section 8: Encapsulation
        this.setupEncapsulationSection();
        
        // Section 9: Polymorphism
        this.setupPolymorphismSection();
        
        // Section 10: Exceptions
        this.setupExceptionsSection();
        
        // Section 11: Collections
        this.setupCollectionsSection();
        
        // Section 12: Final Quest
        this.setupFinalQuestSection();
    }

    setupWelcomeSection() {
        window.showWelcomeMessage = () => {
            const output = document.getElementById('welcome-output');
            if (output) {
                output.innerHTML = `
                    <strong>Output:</strong> Welcome to the Java Jungle! 🌿<br>
                    <strong>Explorer Status:</strong> Ready for adventure!<br>
                    <strong>Current Location:</strong> Base Camp
                `;
                output.style.display = 'block';
                output.style.animation = 'fadeInUp 0.5s ease-out';
            }
        };
    }

    setupClassesSection() {
        window.createTree = () => {
            const type = document.getElementById('treeType')?.value || 'Oak';
            const height = document.getElementById('treeHeight')?.value;
            const output = document.getElementById('tree-output');
            const details = document.getElementById('treeDetails');
            
            if (height && parseInt(height) > 0) {
                const treeData = {
                    type: type,
                    height: parseInt(height),
                    age: 0,
                    health: 'Healthy',
                    leaves: Math.floor(parseInt(height) * 10)
                };
                
                details.innerHTML = `
                    🌳 <strong>${treeData.type} Tree</strong><br>
                    📏 Height: ${treeData.height} feet<br>
                    👶 Age: ${treeData.age} years<br>
                    🍃 Leaves: ${treeData.leaves}<br>
                    💚 Health: ${treeData.health}
                `;
                output.style.display = 'block';
                output.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                this.showAlert('Please enter a valid height for your tree!', 'warning');
            }
        };
    }

    setupObjectsSection() {
        // Object Safari interactive elements
        const objectDemo = document.getElementById('object-safari-demo');
        if (objectDemo) {
            this.createAnimalSafari();
        }
    }

    createAnimalSafari() {
        const animals = [
            { name: 'Java Tiger', type: 'Predator', sound: 'ROAR!', speed: 60, habitat: 'Dense Forest' },
            { name: 'Code Monkey', type: 'Primate', sound: 'CHATTER!', speed: 25, habitat: 'Canopy Layer' },
            { name: 'Binary Parrot', type: 'Bird', sound: '101010!', speed: 40, habitat: 'Tree Tops' },
            { name: 'Algorithm Elephant', type: 'Herbivore', sound: 'TRUMPET!', speed: 15, habitat: 'Forest Floor' }
        ];

        window.spawnAnimal = (animalType) => {
            const animal = animals.find(a => a.name.toLowerCase().includes(animalType.toLowerCase()));
            if (animal) {
                this.displayAnimal(animal);
            }
        };

        window.releaseAllAnimals = () => {
            const safari = document.getElementById('safari-output');
            if (safari) {
                safari.innerHTML = '<h4 style="color: var(--golden-sun);">🌍 Jungle Safari - All Animals Released!</h4>';
                animals.forEach(animal => {
                    safari.innerHTML += `
                        <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                            🦋 <strong>${animal.name}</strong> (${animal.type})<br>
                            🔊 Sound: ${animal.sound}<br>
                            💨 Speed: ${animal.speed} km/h<br>
                            🏠 Habitat: ${animal.habitat}
                        </div>
                    `;
                });
                safari.style.display = 'block';
            }
        };
    }

    displayAnimal(animal) {
        const safari = document.getElementById('safari-output');
        if (safari) {
            safari.innerHTML = `
                <h4 style="color: var(--golden-sun);">🦌 Animal Spotted!</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    🎯 <strong>${animal.name}</strong><br>
                    🎭 Type: ${animal.type}<br>
                    🔊 Call: ${animal.sound}<br>
                    💨 Speed: ${animal.speed} km/h<br>
                    🏠 Lives in: ${animal.habitat}
                </div>
            `;
            safari.style.display = 'block';
            safari.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupMethodsSection() {
        // Method Magic interactive elements
        window.castMethodSpell = (spellType) => {
            const spells = {
                'grow': {
                    name: 'Growth Spell',
                    effect: '🌱 The tree grows 5 feet taller!',
                    mana: 10,
                    description: 'Accelerates natural growth processes'
                },
                'heal': {
                    name: 'Healing Spell',
                    effect: '💚 Restores health and vitality!',
                    mana: 15,
                    description: 'Repairs damage and restores energy'
                },
                'transform': {
                    name: 'Transformation Spell',
                    effect: '🔄 Changes form and abilities!',
                    mana: 25,
                    description: 'Alters physical or magical properties'
                }
            };

            const spell = spells[spellType];
            if (spell) {
                this.displaySpellEffect(spell);
            }
        };

        window.learnMethod = (methodName) => {
            const methods = {
                'calculate': 'public int calculateTreeAge(int height) { return height / 2; }',
                'compare': 'public boolean isTallerThan(Tree other) { return this.height > other.height; }',
                'describe': 'public String getDescription() { return "A " + age + " year old " + type; }'
            };

            const code = methods[methodName];
            if (code) {
                this.displayMethodCode(methodName, code);
            }
        };
    }

    displaySpellEffect(spell) {
        const output = document.getElementById('spell-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">✨ Spell Cast: ${spell.name}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    ${spell.effect}<br>
                    🔮 Mana Cost: ${spell.mana}<br>
                    📜 Description: ${spell.description}
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    displayMethodCode(methodName, code) {
        const output = document.getElementById('method-code-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">📚 Method Learned: ${methodName}</h4>
                <div class="code-block" data-lang="java">
                    <code>${code}</code>
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupVariablesSection() {
        // Variable Vines interactive elements
        window.swingVariable = (variableType) => {
            const variables = {
                'primitive': {
                    types: ['int', 'double', 'boolean', 'char', 'float', 'long', 'byte', 'short'],
                    description: 'Store simple values directly'
                },
                'reference': {
                    types: ['String', 'Array', 'Object', 'Class', 'Interface'],
                    description: 'Store references to objects'
                }
            };

            const variable = variables[variableType];
            if (variable) {
                this.displayVariableInfo(variableType, variable);
            }
        };

        window.createVariable = () => {
            const name = document.getElementById('varName')?.value;
            const type = document.getElementById('varType')?.value;
            const value = document.getElementById('varValue')?.value;

            if (name && type && value) {
                this.showVariableDeclaration(name, type, value);
            } else {
                this.showAlert('Please fill in all fields!', 'warning');
            }
        };
    }

    displayVariableInfo(type, variable) {
        const output = document.getElementById('variable-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🌿 Variable Vine: ${type.toUpperCase()}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <strong>Types:</strong> ${variable.types.join(', ')}<br>
                    <strong>Purpose:</strong> ${variable.description}
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    showVariableDeclaration(name, type, value) {
        const output = document.getElementById('variable-declaration');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">📝 Variable Created!</h4>
                <div class="code-block" data-lang="java">
                    <code>${type} ${name} = ${value};</code>
                </div>
                <p><strong>Your ${type} variable "${name}" now holds the value: ${value}</strong></p>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupControlFlowSection() {
        // Control Flow River interactive elements
        window.navigateRiver = (flowType) => {
            const flows = {
                'if': {
                    name: 'Decision Rapids',
                    description: 'Navigate through conditional paths',
                    code: 'if (waterLevel > 5) { paddleFaster(); }'
                },
                'loop': {
                    name: 'Whirlpool Loop',
                    description: 'Circle around until condition met',
                    code: 'while (!reachedDestination) { keepPaddling(); }'
                },
                'switch': {
                    name: 'Branching Streams',
                    description: 'Choose from multiple paths',
                    code: 'switch (riverDirection) { case NORTH: goNorth(); break; }'
                }
            };

            const flow = flows[flowType];
            if (flow) {
                this.displayFlowControl(flow);
            }
        };

        window.testCondition = () => {
            const condition = document.getElementById('conditionInput')?.value;
            if (condition) {
                this.evaluateCondition(condition);
            }
        };
    }

    displayFlowControl(flow) {
        const output = document.getElementById('flow-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🌊 ${flow.name}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <p>${flow.description}</p>
                    <div class="code-block" data-lang="java">
                        <code>${flow.code}</code>
                    </div>
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    evaluateCondition(condition) {
        const output = document.getElementById('condition-result');
        if (output) {
            let result = false;
            try {
                // Simple condition evaluation (for demo purposes)
                result = eval(condition.replace(/=/g, '==').replace(/AND/g, '&&').replace(/OR/g, '||'));
            } catch (e) {
                result = 'Error in condition';
            }

            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🎯 Condition Result</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <strong>Condition:</strong> ${condition}<br>
                    <strong>Result:</strong> ${result}<br>
                    <strong>Action:</strong> ${result ? 'Continue down the river' : 'Take alternative path'}
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupInheritanceSection() {
        // Inheritance Trail interactive elements
        window.exploreInheritance = (relationship) => {
            const relationships = {
                'parent-child': {
                    name: 'Family Tree',
                    description: 'Parent classes pass traits to children',
                    example: 'class Animal { void eat() { } } class Tiger extends Animal { }'
                },
                'interface': {
                    name: 'Contract Inheritance',
                    description: 'Interfaces define required behaviors',
                    example: 'interface Hunter { void hunt(); } class Tiger implements Hunter { }'
                }
            };

            const rel = relationships[relationship];
            if (rel) {
                this.displayInheritance(rel);
            }
        };

        window.createFamilyTree = () => {
            const tree = {
                'LivingThing': {
                    traits: ['breathes', 'grows', 'reproduces'],
                    children: ['Animal', 'Plant']
                },
                'Animal': {
                    traits: ['moves', 'eats', 'sleeps'],
                    children: ['Tiger', 'Monkey', 'Elephant']
                },
                'Tiger': {
                    traits: ['hunts', 'roars', 'striped'],
                    children: []
                }
            };

            this.displayFamilyTree(tree);
        };
    }

    displayInheritance(relationship) {
        const output = document.getElementById('inheritance-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🧬 ${relationship.name}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <p>${relationship.description}</p>
                    <div class="code-block" data-lang="java">
                        <code>${relationship.example}</code>
                    </div>
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    displayFamilyTree(tree) {
        const output = document.getElementById('family-tree-output');
        if (output) {
            let html = '<h4 style="color: var(--golden-sun);">🌳 Jungle Family Tree</h4>';
            
            Object.keys(tree).forEach(ancestor => {
                html += this.renderFamilyMember(ancestor, tree[ancestor], tree, 0);
            });

            output.innerHTML = html;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    renderFamilyMember(name, data, tree, level) {
        const indent = '  '.repeat(level);
        let html = `${indent}<div style="margin: 0.5rem 0; padding: 0.5rem; background: rgba(74, 124, 74, 0.1); border-radius: 5px; margin-left: ${level * 20}px;">`;
        html += `<strong>${name}</strong><br>`;
        html += `${indent}Traits: ${data.traits.join(', ')}<br>`;
        
        if (data.children.length > 0) {
            html += `${indent}Children: ${data.children.join(', ')}`;
        }
        html += '</div>';
        
        return html;
    }

    setupEncapsulationSection() {
        // Encapsulation Cave interactive elements
        window.accessCave = (accessLevel) => {
            const levels = {
                'private': {
                    name: 'Secret Chamber',
                    description: 'Only accessible within the same class',
                    modifier: 'private',
                    access: 'Class only'
                },
                'protected': {
                    name: 'Family Vault',
                    description: 'Accessible to class and subclasses',
                    modifier: 'protected',
                    access: 'Class + Subclasses'
                },
                'public': {
                    name: 'Grand Hall',
                    description: 'Accessible from anywhere',
                    modifier: 'public',
                    access: 'Everywhere'
                }
            };

            const level = levels[accessLevel];
            if (level) {
                this.displayEncapsulation(level);
            }
        };

        window.useGetterSetter = (property) => {
            const properties = {
                'health': {
                    getter: 'public int getHealth() { return health; }',
                    setter: 'public void setHealth(int h) { this.health = h; }'
                },
                'strength': {
                    getter: 'public int getStrength() { return strength; }',
                    setter: 'public void setStrength(int s) { this.strength = s; }'
                }
            };

            const prop = properties[property];
            if (prop) {
                this.displayGetterSetter(property, prop);
            }
        };
    }

    displayEncapsulation(level) {
        const output = document.getElementById('encapsulation-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🔐 ${level.name}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <p>${level.description}</p>
                    <strong>Modifier:</strong> ${level.modifier}<br>
                    <strong>Access:</strong> ${level.access}
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    displayGetterSetter(property, prop) {
        const output = document.getElementById('getter-setter-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🔑 ${property.toUpperCase()} Access Methods</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <strong>Getter:</strong><br>
                    <div class="code-block" data-lang="java">
                        <code>${prop.getter}</code>
                    </div>
                    <strong>Setter:</strong><br>
                    <div class="code-block" data-lang="java">
                        <code>${prop.setter}</code>
                    </div>
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupPolymorphismSection() {
        // Polymorphism Pond interactive elements
        window.shapeShift = (form) => {
            const forms = {
                'animal': {
                    name: 'Animal Forms',
                    description: 'Same method, different behaviors',
                    examples: [
                        'Tiger.roar() → "ROAR!"',
                        'Monkey.chatter() → "CHATTER!"',
                        'Elephant.trumpet() → "TRUMPET!"'
                    ]
                },
                'method': {
                    name: 'Method Overloading',
                    description: 'Same method name, different parameters',
                    examples: [
                        'makeSound() → Default sound',
                        'makeSound(volume) → Loud/quiet sound',
                        'makeSound(volume, duration) → Custom sound'
                    ]
                }
            };

            const formData = forms[form];
            if (formData) {
                this.displayPolymorphism(formData);
            }
        };

        window.demonstratePolymorphism = () => {
            const animals = [
                { type: 'Tiger', sound: 'ROAR!', action: 'hunt()' },
                { type: 'Monkey', sound: 'CHATTER!', action: 'swing()' },
                { type: 'Elephant', sound: 'TRUMPET!', action: 'stampede()' }
            ];

            this.showPolymorphismDemo(animals);
        };
    }

    displayPolymorphism(formData) {
        const output = document.getElementById('polymorphism-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🎭 ${formData.name}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <p>${formData.description}</p>
                    ${formData.examples.map(example => `<div style="margin: 0.5rem 0; font-family: monospace;">${example}</div>`).join('')}
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    showPolymorphismDemo(animals) {
        const output = document.getElementById('polymorphism-demo');
        if (output) {
            let html = '<h4 style="color: var(--golden-sun);">🎪 Polymorphism in Action!</h4>';
            
            animals.forEach(animal => {
                html += `
                    <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                        <strong>${animal.type}:</strong><br>
                        🔊 Sound: ${animal.sound}<br>
                        🎬 Action: ${animal.action}
                    </div>
                `;
            });

            output.innerHTML = html;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupExceptionsSection() {
        // Exception Volcano interactive elements
        window.triggerEruption = (exceptionType) => {
            const exceptions = {
                'nullpointer': {
                    name: 'NullPointerException',
                    description: 'Trying to use a null reference',
                    fix: 'Check if object is null before using'
                },
                'arraybounds': {
                    name: 'ArrayIndexOutOfBoundsException',
                    description: 'Accessing invalid array index',
                    fix: 'Check array length before accessing'
                },
                'arithmetic': {
                    name: 'ArithmeticException',
                    description: 'Division by zero',
                    fix: 'Check divisor before division'
                }
            };

            const exception = exceptions[exceptionType];
            if (exception) {
                this.displayException(exception);
            }
        };

        window.handleException = () => {
            const code = `
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
    result = 0;
} finally {
    System.out.println("Cleanup code here");
}
            `;

            this.showExceptionHandling(code);
        };
    }

    displayException(exception) {
        const output = document.getElementById('exception-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🌋 ${exception.name}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(139, 69, 19, 0.2); border-radius: 10px;">
                    <p><strong>Problem:</strong> ${exception.description}</p>
                    <p><strong>Solution:</strong> ${exception.fix}</p>
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    showExceptionHandling(code) {
        const output = document.getElementById('exception-handling');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🛡️ Exception Handling</h4>
                <div class="code-block" data-lang="java">
                    <code>${code}</code>
                </div>
                <p><strong>Result:</strong> Program continues running instead of crashing!</p>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupCollectionsSection() {
        // Collections Camp interactive elements
        window.organizeCamp = (collectionType) => {
            const collections = {
                'array': {
                    name: 'Supply Array',
                    description: 'Fixed-size storage for supplies',
                    example: 'String[] supplies = {"rope", "compass", "water"};'
                },
                'arraylist': {
                    name: 'Dynamic Supply List',
                    description: 'Growable list of supplies',
                    example: 'ArrayList<String> supplies = new ArrayList<>(); supplies.add("rope");'
                },
                'hashmap': {
                    name: 'Supply Inventory',
                    description: 'Key-value mapping of items',
                    example: 'HashMap<String, Integer> inventory = new HashMap<>(); inventory.put("rope", 5);'
                }
            };

            const collection = collections[collectionType];
            if (collection) {
                this.displayCollection(collection);
            }
        };

        window.searchSupplies = () => {
            const supplies = [
                'Rope', 'Compass', 'Water Bottle', 'First Aid Kit',
                'Flashlight', 'Map', 'Insect Repellent', 'Energy Bars'
            ];
            
            const searchTerm = document.getElementById('searchInput')?.value?.toLowerCase();
            const results = supplies.filter(supply => 
                supply.toLowerCase().includes(searchTerm)
            );

            this.showSearchResults(results, searchTerm);
        };
    }

    displayCollection(collection) {
        const output = document.getElementById('collection-output');
        if (output) {
            output.innerHTML = `
                <h4 style="color: var(--golden-sun);">🏕️ ${collection.name}</h4>
                <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                    <p>${collection.description}</p>
                    <div class="code-block" data-lang="java">
                        <code>${collection.example}</code>
                    </div>
                </div>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    showSearchResults(results, searchTerm) {
        const output = document.getElementById('search-results');
        if (output) {
            if (results.length > 0) {
                output.innerHTML = `
                    <h4 style="color: var(--golden-sun);">🔍 Search Results for "${searchTerm}"</h4>
                    <div style="margin: 1rem 0; padding: 1rem; background: rgba(74, 124, 74, 0.2); border-radius: 10px;">
                        <strong>Found ${results.length} item(s):</strong><br>
                        ${results.map(item => `• ${item}`).join('<br>')}
                    </div>
                `;
            } else {
                output.innerHTML = `
                    <h4 style="color: var(--golden-sun);">🔍 Search Results</h4>
                    <div style="margin: 1rem 0; padding: 1rem; background: rgba(139, 69, 19, 0.2); border-radius: 10px;">
                        No items found matching "${searchTerm}"
                    </div>
                `;
            }
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    setupFinalQuestSection() {
        // Final Quest interactive elements
        window.startQuest = () => {
            const quest = {
                title: 'The Lost Temple of Code',
                objective: 'Find and activate the ancient Java temple',
                challenges: [
                    'Navigate through the Class Forest',
                    'Solve the Object Puzzle Chambers',
                    'Defeat the Exception Guardian',
                    'Unlock the Inheritance Gates'
                ],
                reward: 'Mastery of Java Programming'
            };

            this.displayQuestDetails(quest);
        };

        window.completeChallenge = (challengeIndex) => {
            this.markChallengeComplete(challengeIndex);
        };

        window.claimReward = () => {
            this.showReward();
        };
    }

    displayQuestDetails(quest) {
        const output = document.getElementById('quest-details');
        if (output) {
            output.innerHTML = `
                <h3 style="color: var(--golden-sun);">🗿 ${quest.title}</h3>
                <p><strong>Objective:</strong> ${quest.objective}</p>
                <h4 style="color: var(--vibrant-green);">Challenges:</h4>
                ${quest.challenges.map((challenge, index) => `
                    <div class="challenge-item" style="margin: 0.5rem 0; padding: 0.5rem; background: rgba(74, 124, 74, 0.1); border-radius: 5px;">
                        <input type="checkbox" id="challenge-${index}" onchange="completeChallenge(${index})">
                        <label for="challenge-${index}">${challenge}</label>
                    </div>
                `).join('')}
                <p><strong>Reward:</strong> ${quest.reward}</p>
                <button class="demo-button" onclick="claimReward()" id="claim-reward" disabled>
                    🏆 Claim Your Java Mastery Certificate
                </button>
            `;
            output.style.display = 'block';
            output.style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    markChallengeComplete(challengeIndex) {
        const checkbox = document.getElementById(`challenge-${challengeIndex}`);
        if (checkbox && checkbox.checked) {
            this.explorerProgress.challenges = this.explorerProgress.challenges || {};
            this.explorerProgress.challenges[challengeIndex] = true;
            
            // Check if all challenges are complete
            const totalChallenges = 4; // Update based on actual number
            const completedChallenges = Object.keys(this.explorerProgress.challenges || {}).length;
            
            if (completedChallenges >= totalChallenges) {
                const claimButton = document.getElementById('claim-reward');
                if (claimButton) {
                    claimButton.disabled = false;
                    claimButton.style.background = 'linear-gradient(45deg, var(--golden-sun), #b8860b)';
                }
            }
            
            this.saveProgress();
        }
    }

    showReward() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        modal.innerHTML = `
            <div style="background: linear-gradient(135deg, var(--deep-forest), var(--jungle-green)); padding: 3rem; border-radius: 20px; text-align: center; max-width: 500px;">
                <h2 style="color: var(--golden-sun); font-family: var(--font-display);">🏆 Java Jungle Mastery Certificate 🏆</h2>
                <p style="color: var(--misty-white); margin: 1rem 0;">
                    Congratulations, brave explorer! You have successfully completed your journey through the Java Jungle.
                </p>
                <p style="color: var(--warm-beige); margin: 1rem 0;">
                    You are now a certified Java programmer, ready to build amazing applications and continue your coding adventures!
                </p>
                <div style="margin: 2rem 0; padding: 1rem; background: rgba(218, 165, 32, 0.1); border-radius: 10px;">
                    <strong>Skills Mastered:</strong><br>
                    • Object-Oriented Programming<br>
                    • Java Fundamentals<br>
                    • Problem Solving<br>
                    • Code Organization
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="padding: 1rem 2rem; background: var(--golden-sun); color: var(--deep-forest); border: none; border-radius: 25px; font-weight: 600; cursor: pointer;">
                    Continue Your Journey
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all concept cards
        document.querySelectorAll('.concept-card').forEach(card => {
            observer.observe(card);
        });

        // Add floating animation to random elements
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.concept-card');
            cards.forEach((card, index) => {
                if (index % 2 === 0) {
                    card.classList.add('animate-float');
                }
            });
        });
    }

    showAlert(message, type = 'info') {
        const alert = document.createElement('div');
        alert.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: fadeInUp 0.5s ease-out;
        `;
        
        const colors = {
            info: 'rgba(74, 124, 74, 0.9)',
            warning: 'rgba(218, 165, 32, 0.9)',
            error: 'rgba(139, 69, 19, 0.9)',
            success: 'rgba(107, 155, 107, 0.9)'
        };
        
        alert.style.background = colors[type] || colors.info;
        alert.textContent = message;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    saveProgress() {
        localStorage.setItem('javaJungleProgress', JSON.stringify({
            explorerName: this.explorerName,
            progress: this.explorerProgress,
            currentSection: this.currentSection
        }));
    }

    loadProgress() {
        const saved = localStorage.getItem('javaJungleProgress');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.explorerName = data.explorerName || '';
                this.explorerProgress = { ...this.explorerProgress, ...data.progress };
                this.currentSection = data.currentSection || 'welcome';
            } catch (e) {
                console.log('Could not load progress:', e);
            }
        }
    }
}

// Initialize the adventure when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.jungleAdventure = new JungleAdventure();
});

// Export for global access
window.JavaJungleAdventure = JungleAdventure;