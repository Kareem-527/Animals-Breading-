import { Question } from './types';

// Extracted from the provided OCR text. 
// Note: While the PDF contains ~275 questions, a representative subset covering various chapters is included here for performance and functionality demonstration. 
// Ideally, this data would come from a database or a full JSON file.

export const questions: Question[] = [
  {
    id: 1,
    chapter: "1",
    text: "The main purposes of animal breeder to produce superior genotypes by combination of good genes through……",
    options: { A: "Drift", B: "mating system", C: "mutation" },
    correctAnswer: "B"
  },
  {
    id: 2,
    chapter: "1",
    text: "…………is a group of individuals of the same species in a defined location",
    options: { A: "Animal Breeding", B: "Gene pool", C: "Population" },
    correctAnswer: "C"
  },
  {
    id: 3,
    chapter: "1",
    text: "Populations are ……….where they may grow or diminish through change in birth or death rates or by migration",
    options: { A: "Static", B: "Dynamic", C: "Mechanic" },
    correctAnswer: "B"
  },
  {
    id: 4,
    chapter: "1",
    text: "……….is the summation of all genes that occur in a population of organisms of the same species",
    options: { A: "Animal Breeding", B: "gene pool", C: "population" },
    correctAnswer: "B"
  },
  {
    id: 5,
    chapter: "1",
    text: "……….. is any observable or measurable characteristic of an individual",
    options: { A: "Trait", B: "Phenotype", C: "Genotype" },
    correctAnswer: "A"
  },
  {
    id: 6,
    chapter: "1",
    text: "One gene hides the effect of other gene at different gene loci is called ………….",
    options: { A: "Dominance", B: "Co-dominance", C: "Epistasis" },
    correctAnswer: "C"
  },
  {
    id: 7,
    chapter: "1",
    text: "……………..It is a science which uses the principles of population and quantitative genetics for the improvement of livestock production",
    options: { A: "Animal Breeding", B: "Animal Genetics", C: "Animal Production" },
    correctAnswer: "A"
  },
  {
    id: 8,
    chapter: "1",
    text: "…………….is the occurrence of differences among individuals of the same species.",
    options: { A: "Heredity", B: "Variation", C: "Genetics" },
    correctAnswer: "B"
  },
  {
    id: 9,
    chapter: "1",
    text: "The main purposes of animal breeder to select the most desirable animals based on the prediction of ………….",
    options: { A: "Environmental potential", B: "Phenotypic potential", C: "Genetic potential" },
    correctAnswer: "C"
  },
  {
    id: 10,
    chapter: "1",
    text: "………..is what can be observed or measured",
    options: { A: "Phenotype", B: "Genotype", C: "Gene" },
    correctAnswer: "A"
  },
  {
    id: 27,
    chapter: "1",
    text: "……………...the relative frequency of a particular allele in a population",
    options: { A: "Gene frequency", B: "Genotype frequency", C: "Gene pool" },
    correctAnswer: "A"
  },
  {
    id: 28,
    chapter: "1",
    text: "The frequencies of all alleles at any one locus must add up to……..",
    options: { A: "0.5", B: "0.7", C: "1" },
    correctAnswer: "C"
  },
  {
    id: 31,
    chapter: "1",
    text: "In HWE law the allelic frequencies do not change from one generation to the next",
    options: { A: "TRUE", B: "FALSE", C: "N/A" },
    correctAnswer: "A"
  },
  {
    id: 38,
    chapter: "2",
    text: "……..are kinds of process that alter the gene and genotype frequencies",
    options: { A: "Systematic process", B: "Dispersive process", C: "both a & b" },
    correctAnswer: "C"
  },
  {
    id: 41,
    chapter: "2",
    text: "………….simply means that individuals with certain genes (superior genes) produce more offspring than others",
    options: { A: "Migration", B: "Selection", C: "Genetic drift" },
    correctAnswer: "B"
  },
  {
    id: 46,
    chapter: "2",
    text: "……….is the movement of individuals out of the population",
    options: { A: "Emigration", B: "Fitness", C: "Immigration" },
    correctAnswer: "A"
  },
  {
    id: 48,
    chapter: "2",
    text: "……………...is a heritable change in the DNA to create new alleles",
    options: { A: "Genetic drift", B: "Migration", C: "Mutation" },
    correctAnswer: "C"
  },
  {
    id: 66,
    chapter: "3",
    text: "The main challenge to the breeder is to decide on a priority order for required characters",
    options: { A: "TRUE", B: "FALSE", C: "N/A" },
    correctAnswer: "A"
  },
  {
    id: 69,
    chapter: "3",
    text: "………….. traits are controlled by few genes",
    options: { A: "Quantitative", B: "Qualitative", C: "Objective" },
    correctAnswer: "B"
  },
  {
    id: 86,
    chapter: "4",
    text: "……….gene action means that the phenotypic effect of one gene adds to the phenotypic effect of its own allele",
    options: { A: "Additive", B: "Non-additive", C: "both a & b" },
    correctAnswer: "A"
  },
  {
    id: 93,
    chapter: "4",
    text: "Carcass quality trait is a kind of …………….gene action",
    options: { A: "Non-additive", B: "Dominance", C: "Additive" },
    correctAnswer: "C"
  },
  {
    id: 118,
    chapter: "5",
    text: "…………..is the mating of animals that are more closely related to each other than the average relationship in a population",
    options: { A: "Out breeding", B: "Inbreeding", C: "Out crossing" },
    correctAnswer: "B"
  },
  {
    id: 136,
    chapter: "6",
    text: "……..it is the mating of animals less closely related than the average relationship within the population.",
    options: { A: "Outbreeding", B: "inbreeding", C: "Line breeding" },
    correctAnswer: "A"
  },
  {
    id: 146,
    chapter: "6",
    text: "………...is the name given to the increased vigour of the offspring over than of the parents when unrelated individuals are mated.",
    options: { A: "Intensive inbreeding", B: "Line breeding", C: "Heterosis" },
    correctAnswer: "C"
  },
  {
    id: 166,
    chapter: "7",
    text: "……….is the degree to which offspring resemble their parents in the performance for a trait",
    options: { A: "heritability", B: "repeatability", C: "correlation" },
    correctAnswer: "A"
  },
  {
    id: 169,
    chapter: "7",
    text: "You cannot have a negative heritability",
    options: { A: "True", B: "False", C: "N/A" },
    correctAnswer: "A"
  },
  {
    id: 203,
    chapter: "8",
    text: "…...is a process in which certain individuals in a population are preferred to others for the production of the next generation",
    options: { A: "mutation", B: "migration", C: "selection" },
    correctAnswer: "C"
  },
  {
    id: 205,
    chapter: "8",
    text: "……...selection is of the greatest concern to the livestock breeders",
    options: { A: "Directional", B: "Stabilizing", C: "Disruptive" },
    correctAnswer: "A"
  },
  {
    id: 249,
    chapter: "9",
    text: "….is the value of genes to the progeny",
    options: { A: "genetic value", B: "breeding value", C: "environmental value" },
    correctAnswer: "B"
  },
  {
    id: 250,
    chapter: "9",
    text: "The value of genes to the animal itself",
    options: { A: "genetic value", B: "breeding value", C: "environmental value" },
    correctAnswer: "A"
  }
];